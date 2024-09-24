import os
import pygame
import webbrowser
from button import Button
from project import Project
from player import Player
from game_manager import GameManager
from constants import *

pygame.init()

gm = GameManager()

pygame.display.set_caption("Portfolio Game")

gm.projects.append(Project(500, 
                           200, 
                           "Portfolio Website", 
                           ["first line", 
                            "second line", 
                            "third line"], 
                           "https://github.com/brookec123/portfolioWebsite", 
                           None))
gm.projects.append(Project(900, 
                           200, 
                           "Open Command Folder VSCode", 
                           ["Opens a command prompt window from the folder that the currently opened file is in."], 
                           "https://github.com/brookec123/opencmdfolder", 
                           None))

gm.buttons.append(Button("GitHub", "https://github.com/brookec123", 50, 50))
gm.buttons.append(Button("itch.io", "https://brookec123.itch.io/", 200, 50))

def main() -> None:
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            gm.move_bkg(gm.player.speed, 0)
        if keys[pygame.K_RIGHT]:
            gm.move_bkg(-gm.player.speed, 0)
        if keys[pygame.K_UP]:
            gm.move_bkg(0, gm.player.speed)
        if keys[pygame.K_DOWN]:
            gm.move_bkg(0, -gm.player.speed)
        # Update button status based on player position
        for btn in gm.buttons:
            btn.open_link(gm.player, gm.background_rect)
        for proj in gm.projects:
            proj.btn_source_code_link.open_link(gm.player, gm.background_rect)
            
        gm.update()
        pygame.display.flip()
        gm.clock.tick(FPS)

    pygame.quit()



if __name__ == "__main__":
    main()