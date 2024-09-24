import pygame
from button import Button
from project import Project
from player import Player
from constants import *

class GameManager:
    def __init__(self) -> None:
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        self.clock = pygame.time.Clock()
        self.player = Player()
        self.background_surface = pygame.Surface((GAME_WIDTH, GAME_HEIGHT))
        self.background = pygame.image.load("C:\\Users\\brook\\OneDrive\\Desktop\\SideProjects\\portfolio\\portfolioWebsite\\game\\pygame_game\\background.png")
        self.background = pygame.transform.scale(self.background, (64, 64))
        self.background_rect = self.background.get_rect()
        self.projects = []
        self.buttons = []

    def move_bkg(self, x_move:int, y_move:int) -> None:
        self.background_rect.x += x_move
        self.background_rect.y += y_move
        for btn in self.buttons:
            btn.move(x_move, y_move)
        for proj in self.projects:
            proj.move(x_move, y_move)

    def draw_tiled_background(self):
        num_repeats_x = SCREEN_WIDTH // self.background.get_width() + 1
        num_repeats_y = SCREEN_HEIGHT // self.background.get_height() + 1

        for i in range(num_repeats_x):
            for j in range(num_repeats_y):
                self.screen.blit(self.background, (i * self.background.get_width(), j * self.background.get_height()))

    def update(self) -> None:
        self.draw_tiled_background()

        # Calculate offset to center the player on the screen
        offset_x = SCREEN_WIDTH // 2 - self.player.player_x
        offset_y = SCREEN_HEIGHT // 2 - self.player.player_y

        # Adjust the position of the background and objects
        self.move_bkg(offset_x, offset_y)

        # Ensure the player stays within the bounds of the screen
        self.player.player_x += offset_x
        self.player.player_y += offset_y

        # Draw the game elements
        for btn in self.buttons:
            btn.draw_button(self.screen)

        for proj in self.projects:
            proj.draw_project(self.screen)

        self.player.draw(self.screen)

        