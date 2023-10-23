# Урок 1. Работа с удалёнными репозиториями
* Выберите какой-нибудь проект на изучаемом вами языке программирования, с которым вы будете тренироваться работать в Git, и инициализируйте в папке этого проекта локальный репозиторий.
* Создайте непустой удалённый репозиторий (например, с файлом README.md) с именем, соответствующим имени этого проекта.
* Подключите свой проект к этому удалённому репозиторию и отправьте в него код этого проекта.
* Самостоятельно разрешите конфликты и проблемы, если они возникнут при выполнении данного задания.

## РЕШЕНИЕ:

Создаём удалённый репозиторий на github.com с изначальным добавлением README.md, где размещаем поставленную задачу - делаем коммит `Update README.md`

Создаём папку с проектом на локальном компьютере, инициализируем GIT

    > git init
        Initialized empty Git repository in D:/_GEEK Brains/git 2 advanced/sem1/.git/
    > git add . 
    > git commit -m "initial commit"
        [master (root-commit) 452c0a5] initial commit
        3 files changed, 246 insertions(+)
        create mode 100644 page_01.html
        create mode 100644 scripts.js
        create mode 100644 style.css

Указываем в локальном репозитории данные удалённого, меняем название главной ветки с MASTER на MAIN

    > git remote add origin https://github.com/Smazhko/git-adv-sem1.git
        origin  https://github.com/Smazhko/git-adv-sem1.git (fetch)
        origin  https://github.com/Smazhko/git-adv-sem1.git (push)
    > git branch -M main
    > git status
    On branch main
    nothing to commit, working tree clean

При попытке отправить данные локального репозитория в удалённый...

    > git push -u origin main
    
получаем сообщение:
    
    To https://github.com/Smazhko/git-adv-sem1.git
    ! [rejected]        main -> main (fetch first)
    error: failed to push some refs to 'https://github.com/Smazhko/git-adv-sem1.git'
    hint: Updates were rejected because the remote contains work that you do
    hint: not have locally. This is usually caused by another repository pushing
    hint: to the same ref. You may want to first integrate the remote changes
    hint: (e.g., 'git pull ...') before pushing again.
    hint: See the 'Note about fast-forwards' in 'git push --help' for details.

При попытке **`git pull`** git выдаёт ошибку

    > git pull
    remote: Enumerating objects: 6, done.
    remote: Compressing objects: 100% (3/3), done.
    Unpacking objects: 100% (6/6), 1.65 KiB | 12.00 KiB/s, done.
    * [new branch]      main       -> origin/main
    There is no tracking information for the current branch.
    Please specify which branch you want to merge with.
    See git-pull(1) for details.

    git pull <remote> <branch>


    > git pull
    fatal: refusing to merge unrelated histories

**`fatal: refusing to merge unrelated histories`** - ошибка Git которая возникает, когда два не связанных между собой проекта объединяются (то есть проекты, которые не знают о существовании друг друга и не соответствующие друг другу по фиксации истории).  
Устранение ошибки:

    git pull origin main --allow-unrelated-histories   
    From https://github.com/Smazhko/git-advanced-seminar1
    * branch            main       -> FETCH_HEAD
    Merge made by the 'ort' strategy.
    README.md | 7 +++++++
    1 file changed, 7 insertions(+)
    create mode 100644 README.md

затем спокойно отправляем файлы нашего проекта на удалённый репозиторий

    > git push
    Enumerating objects: 8, done.
    Counting objects: 100% (8/8), done.
    Delta compression using up to 4 threads
    Compressing objects: 100% (7/7), done.
    Writing objects: 100% (7/7), 3.78 KiB | 1.89 MiB/s, done.
    Total 7 (delta 1), reused 0 (delta 0), pack-reused 0
    remote: Resolving deltas: 100% (1/1), done.
    To https://github.com/Smazhko/git-advanced-seminar1.git
    4368431..0d0ba1f  main -> main