#!/usr/bin/env zsh

npm install -g @angular/cli
npm install -g @nestjs/cli

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

sed -i 's/plugins=(git)/plugins=(git docker docker-compose node npm yarn zsh-autosuggestions zsh-syntax-highlighting)/' ~/.zshrc

sudo usermod -s /usr/bin/zsh $(whoami)
