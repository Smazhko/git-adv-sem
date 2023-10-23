# Урок 2. Работа с изменениями
Данное домашнее задание является продолжением домашнего задания, которое вы выполняли на предыдущем семинаре в репозитории с собственным проектом.

1. Просмотрите историю коммитов в своём проекте и выберите три случайных коммита. Просмотрите изменения, которые были в них сделаны.

2. Верните эти изменения командой git revert последовательно, чтобы в итоге получилось тоже три коммита.

3. Попробуйте отменить эти три коммита:
* последний — командами git reset --soft и git restore;
* предпоследний — командой git reset --mixed и git restore;
* первый — командой git reset --hard.

----------
## РЕШЕНИЕ: 

смотрим историю коммитов реппозитория:

    > git log --pretty=format:"%h - %an | %ar: %s"
    8943e33 - Peter Smazhko | 37 seconds ago: README.md edit - added seminar 2 task
    6f01004 - Peter Smazhko | 22 minutes ago: main.js edited - add changeButtonsStatus
    01db15c - Peter Smazhko | 23 minutes ago: main.js added
    79d0e32 - Peter Smazhko | 24 minutes ago: page_02.html added - Измеритель длины текста
    f029814 - Peter Smazhko | 28 minutes ago: style.css redacted - h1, h2, DIV.articleTitle, DIV.articleText
    059c1e0 - Peter Smazhko | 34 minutes ago: index.html add content - article is finished
    3b92826 - Peter Smazhko | 35 minutes ago: index.html add content - особенности импрессионизма
    211f6d9 - Peter Smazhko | 37 minutes ago: index.html added + some content in index.html
    de041ba - Peter Smazhko | 45 minutes ago: update README.md - solution
    0d0ba1f - Peter Smazhko | 2 hours ago: Merge branch 'main' of https://github.com/Smazhko/git-advanced-seminar1
    452c0a5 - Peter Smazhko | 2 hours ago: initial commit
    4368431 - StoneMD | 2 hours ago: Update README.md
    886da77 - StoneMD | 2 hours ago: Initial commit

просматриваем изменения трёх рандомных коммитов:  
**первого**:

    > git show f029814
    commit f02981451cdfe4eeab9be0ef1227373ce76b682f
    Author: Peter Smazhko <smazhko@gmail.com>
    Date:   Mon Oct 23 12:39:31 2023 +0300

        style.css redacted - h1, h2, DIV.articleTitle, DIV.articleText

    diff --git a/style.css b/style.css
    index e3e8d75..2e36b01 100644
    --- a/style.css
    +++ b/style.css
    @@ -6,12 +6,12 @@ body {
    }
    ...

**второго**:

    > git show 211f6d9
    commit 211f6d9d76fc51f00e6b470047317f4eeaa4a145
    Author: Peter Smazhko <smazhko@gmail.com>
    Date:   Mon Oct 23 12:30:51 2023 +0300

        index.html added + some content in index.html

    diff --git a/index.html b/index.html
    new file mode 100644
    index 0000000..519eb99
    --- /dev/null
    +++ b/index.html
    @@ -0,0 +1,63 @@
    ...

**и третьего** (через команду `git diff`): 

    > git diff 6f01004
    diff --git a/README.md b/README.md
    index 39d53d7..adfdab1 100644
    --- a/README.md
    +++ b/README.md
    @@ -1,5 +1,21 @@
    # git-adv-sem1

    +# Урок 2. Работа с изменениями
    +Данное домашнее задание является продолжением домашнего задания, которое вы выполняли на предыдущем семинаре в репозитории с собственным проектом.
    +
    ...

-------

возвращаем состояние файлов к нескольким более ранним коммитам  
**первый**:

    > git revert 79d0e32
    [main 13093d2] Revert "page_02.html added - Измеритель длины текста"
    2 files changed, 42 deletions(-)
    delete mode 100644 page_02.html

**второй**: 

    > git revert 6f01004       
    [main 0f394b2] Revert "main.js edited - add changeButtonsStatus"
    1 file changed, 12 deletions(-)

и **третий**: 

    > git revert de041  
    Auto-merging README.md
    [main f30981d] Revert "update README.md - solution"
    1 file changed, 1 insertion(+), 83 deletions(-)

проверяем, какие коммиты теперь есть после REVERT

    > git log --pretty=oneline
    f30981d (HEAD -> main) Revert "update README.md - solution"
    0f394b2 Revert "main.js edited - add changeButtonsStatus"
    13093d2 Revert "page_02.html added - Измеритель длины текста"
    8943e33 (origin/main) README.md edit - added seminar 2 task
    6f01004 main.js edited - add changeButtonsStatus
    01db15c main.js added
    79d0e32 page_02.html added - Измеритель длины текста
    f029814 style.css redacted - h1, h2, DIV.articleTitle, DIV.articleText
    059c1e0 index.html add content - article is finished
    3b92826 index.html add content - особенности импрессионизма
    211f6d9 index.html added + some content in index.html
    de041ba update README.md - solution
    0d0ba1f Merge branch 'main' of https://github.com/Smazhko/git-advanced-seminar1
    452c0a5 initial commit
    4368431 Update README.md
    886da77 Initial commit

---------------------------------------------------

отменяем **ПОСЛЕДНИЙ** коммит со сбросом до предыдущего

    > git reset --soft 0f394b2

проверяем историю коммитов - последнего возвращенного киммита больше нет:

    git log --pretty=oneline
    0f394b2a40641df9908cc812da2e96cf2753416b (HEAD -> main) Revert "main.js edited - add changeButtonsStatus"
    13093d2053a15a36fca47aec63a9469a9bf15d8e Revert "page_02.html added - Измеритель длины текста"
    8943e3399938c0066533702f720c1ccfe73e3adf (origin/main) README.md edit - added seminar 2 task
    ...

при этом модифицированный в последнем коммите `f30981d` файл `README.md` переместился в индекс (состояние `staged` - готов к коммитированию):

    > git status
    On branch main
    Your branch is ahead of 'origin/main' by 2 commits.
    (use "git push" to publish your local commits)

    Changes to be committed:
    (use "git restore --staged <file>..." to unstage)
            modified:   README.md

убираем файл `README.md` из индексированного состояния. теперь его состояние - модифицирован

    > git restore --staged README.md
    PS D:\_GEEK Brains\git 2 advanced\sem1> git status
    On branch main
    ...
    Changes not staged for commit:
    ...
            modified:   README.md

    no changes added to commit (use "git add" and/or "git commit -a")

отменяем **ВТОРОЙ** возвращённый коммит 

    > git reset --mix 13093d2       
    Unstaged changes after reset:
    M       README.md
    M       main.js

измененные в коммите файлы перешли в состояние - `модицифирован`:

    > git status
    On branch main
    ...

    Changes not staged for commit:
    ...
            modified:   README.md
            modified:   main.js

**ВТОРОЙ** коммит пропал из истории:

    > git log --pretty=oneline
    13093d2053a15a36fca47aec63a9469a9bf15d8e (HEAD -> main) Revert "page_02.html added - Измеритель длины текста"
    8943e3399938c0066533702f720c1ccfe73e3adf (origin/main) README.md edit - added seminar 2 task
    ...

удаляем **ПЕРВЫЙ** REVERTED коммит:

    > git reset --hard 8943e33
    HEAD is now at 8943e33 README.md edit - added seminar 2 task

проверяем статус и историю:

    > git status
    On branch main
    Your branch is up to date with 'origin/main'.

    nothing to commit, working tree clean

    > git log --pretty=oneline
    8943e3399938c0066533702f720c1ccfe73e3adf (HEAD -> main, origin/main) README.md edit - added seminar 2 task
    ...

