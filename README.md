# Another Jekyll Blog

A personal implementation of a Jekyll static web, based on multiple Jekyll themes and projects. Used as CV (curriculum vitae) and blog hosting to show my work to the world from Github Pages.

This project supports two languages: english and spanish. Jekyll, by default, don't includes multilanguage tools. For this reason, there are two folders, one for every language with the same content but diferent translations.


## Source projects
This project is a fork of [sharu725/
online-cv](https://github.com/sharu725/online-cv) and uses [Jekyll](https://jekyllrb.com/) as static web engine. The forked project is a CV template with a cute aspect.

Also, these Jekyll Themes are used in the blog part:
- [Hyde](https://hyde.getpoole.com/)
- [Pool](https://getpoole.com/)

## Instructions
- [Install Ruby](https://www.ruby-lang.org/) in your machine
- [Install Jekyll](https://jekyllrb.com/docs/)
- Download this repository and add a Gemfile from a new Jekyll project (if not exists)
- Edit the information
    - CV: your CV data comes in *data/cv.yml*. This file contains the two language versions.
    - Posts: in *en* and *es* folders.
- Install the required gems using the Gemfile:
```bash
bundle install
```
- See the blog localy
```bash
# Run a local server to see the generated web pages
jekyll server

# Sometimes you need to prepend "bundle exec"to fix errors, specially on Windows environments
bundle exec jekyll server
```
- Push to Github

## Credits
- [sharu725](https://github.com/sharu725)
