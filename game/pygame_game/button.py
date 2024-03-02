import pygame
import webbrowser
from player import Player
from constants import *

class Button:
    def __init__(self, text:str, link:str, x:int, y:int, height:int=100, width:int=50, font_size:int=36) -> None:
        self.font = pygame.font.Font(None, font_size)
        self.button_rect = pygame.Rect(x, y, height, width)
        self.button_active = False
        self.text = text
        self.link = link
        
    def draw_button(self, screen:pygame.Surface) -> None:
        pygame.draw.rect(screen, (0, 128, 255), self.button_rect)
        
        txt = self.font.render(self.text, True, WHITE)
        screen.blit(txt, self.button_rect.topleft)
        
    def open_link(self, player:Player) -> None:
        if self.button_rect.colliderect(player.get_rect()) and not self.button_active:
            print(self.text)
            webbrowser.open(self.link)
            self.button_active = True
        if not self.button_rect.colliderect(player.get_rect()):
            self.button_active = False
    
    def move(self, x_move:int, y_move:int) -> None:
        self.button_rect.x += x_move
        self.button_rect.y += y_move