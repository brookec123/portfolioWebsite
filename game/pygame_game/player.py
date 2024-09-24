import pygame
from constants import *

class Player:
    def __init__(self) -> None:
        self.width = 25
        self.height = 25
        self.player_x = SCREEN_WIDTH // 2 - self.width // 2
        self.player_y = SCREEN_HEIGHT // 2 - self.height // 2
        self.color = (255, 0, 0)
        self.speed = 5

    def draw(self, screen) -> None:
        pygame.draw.rect(screen, self.color, (self.player_x, self.player_y, self.width, self.height))

    def get_rect(self, background_rect) -> pygame.Rect:
        # Return a rectangle relative to self.screen
        return pygame.Rect(self.player_x + background_rect.x, self.player_y + background_rect.y, self.width, self.height)
