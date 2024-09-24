import pygame
from button import Button
from constants import *


class Project:
    def __init__(self, x:int, y:int, title:str, description, source_code_link:str, video_demo_location:str) -> None:
        self.title_font = pygame.font.Font(None, 36)
        self.desc_font = pygame.font.Font(None, 20)
        self.top_corner_x = x
        self.top_corner_y = y
        self.title_text = self.title_font.render(title, True, BLACK)
        self.description = description
        self.bottom_of_description = len(self.description)*(self.desc_font.get_height()+5)+self.title_font.get_height()
        self.source_code_link = source_code_link
        self.btn_source_code_link = Button("SC", self.source_code_link, self.top_corner_x, self.top_corner_y+self.bottom_of_description+10, 30, 30, 20)
        self.video_demo_location = video_demo_location
    
    def render_description_text(self) -> pygame.Surface:
        max_line_width = max([self.desc_font.size(line)[0] for line in self.description])
        total_height = len(self.description) * (self.desc_font.get_height() + 5) + self.title_font.get_height()
        
        # Create a surface with dimensions based on the maximum line width and total height
        description_text = pygame.Surface((max_line_width, total_height), pygame.SRCALPHA)

        line_height = self.desc_font.get_height() + 5
        y_position = 0

        for line in self.description:
            rendered_line = self.desc_font.render(line, True, BLACK)
            description_text.blit(rendered_line, (0, y_position))
            y_position += line_height
        return description_text

    def draw_project(self, screen:pygame.Surface) -> None:
        screen.blit(self.title_text, (self.top_corner_x, self.top_corner_y))
        screen.blit(self.render_description_text(), (self.top_corner_x, self.top_corner_y+self.title_font.get_height()+5))
        self.btn_source_code_link.draw_button(screen)
        
    def move(self, x_move:int, y_move:int) -> None:
        self.top_corner_x += x_move
        self.top_corner_y += y_move
        self.btn_source_code_link.move(x_move, y_move)
