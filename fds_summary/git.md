• git init : 현재 있는 디렉토리를 Working Directory
• git status : 현재 Working Directory 의 상태 확인
• git log --graph --oneline --decorate —all
    • 현재까지 남긴 Commit Log에 대한 정보를 알 수 있는 명령어
    • --graph 옵션은 Commit마다 점선으로 연결되어, 커밋 로그들의 상관 관계들을 그래픽적으로 보여줌
    • --oneline 은 Commit Log 의 내용을 간략적으로 보여주며, 타이틀과 7자리의 해쉬값을 알려줌
    • --decorate 는 HEAD의 위치, refs(브랜치)들의 위치를 알려주는 옵션
    • --all 은 커밋되어 있는 모든 로그를 보여줌
• git show ({commit id}): 해당 Commit의 메시지와 hunks를 보여줌.
    • 현재 (HEAD)와 그 전 커밋(부모)(HEAD^)의 대한 내용을 비교하고 달라진 점을 보여줌. [git show ~] 와 같이 show 뒤에 특정 해쉬값을 붙이게 되면 그 해당 커밋과 그 부모의 커밋의 달라진 내용을 보여줌

• git diff {commitid} {commit2} [—staged]
    • git diff는 두 커밋 사이의 차이를 확인하는 명령어
    • staged 된 상태를 확인하고 싶을 때 그럴 경우에는 --staged 또는 --cached 옵션으로 확인
• git add {파일명/-A/-all/.} [-p]
    • 새로 만들어졌거나 변경된 파일을 staging에 올리는 명령어
    • -A 또는 -all 옵션 : 수정 또는 삭제된 모든 내용을 staging
    • 파일명 또는 . : 특정 파일 또는 모든 파일을 staging
    • p (partial) 옵션을 통해 hunk(코드 덩어리)를 분리할 수 있음
• git commit : 커밋을 남기는 명령어 (-a 옵션을 주면 git add . 효과가 있음)
• git commit -m “커밋 메시지” : 메시지 한번에 남겨서 커밋하기 (엔터로 줄바꿈 가능)


• git fetch : remote의 정보를 가져옴 / git fetch --tags
• git pull
    • remote의 정보를 가져와서 합침(병합)
    • git pull {remote 별칭} {branch 이름} : git pull origin master
• git push {remote 별칭} {branch 이름}
    • remote의 branch로 커밋을 보내기
    • git push -u origin master —> upstream을 설정 : 한번 설정하면 로컬의 브랜치와 리
    모트의 브랜치가 연결되어 다음부터는 명시 없이 push/pull 가능
    • git push origin master:test —> 로컬의 master 브랜치를 origin 리모트의 test 브랜치로 push

• git reset --soft --hard {대상}
    • 현재 working directory 또는 stage를 reset하는 명령어. staged 혹은 잘못 Commit 한 것을 되돌리고 싶을 때 주로 쓰는 명령어. 대상에는 HEAD, HEAD^, HEAD~N, Commit-id 코드 등 사용 가능
    • --mixed 는 아무런 옵션도 주지 않았을 때, 기본적으로 작동하는 옵션으로서 현재 stage를 해당 커밋과 같게 만듦. --soft 옵션은 현재 stage를 유지시킨 채로 해당 커밋과 같게 만듦
    • --hard 는 stage 뿐만이 아니라, 현재 working directory의 상태까지 해당 커밋과 같게 만듦
• git rm
    • git rm은 “rm”(파일삭제) + git add -A 한 작업과 같다
    • git rm --cached 는 실제 파일은 삭제하지 않지만 git 버전관리에서 삭제
• git mv {수정 전 경로/파일명} {수정 후 경로/파일명}
    • git rm 과 마찬가지로 리눅스 mv를 하면 staged 되지 않은 채로 어색함. git mv 로 파일을 옮기거나 이름을 바꾸면 stage 까지 알아서 됨

• git revert {commit id}
    • 특정 Commit과 같은 내용으로 되돌리되, 새로운 커밋이 추가되는 방식이라 기존의 히스
토리는 유지
• git stash
    • stash는 현재 진행되고 있는 상황을 저장하고, 그 이후에 다른 행동을 취하다가 다시 돌
    아올 수 있음. 작업 중인데 pull할 일이 생기면 보통 커밋을 요구받는데, stash를 유용하
    게 사용할 수 있음
    • git stash pop 으로 복원
• git reflog : 명령어 히스토리 보기
• git clean -fd : 현재 git status 에서 untracked 된 파일들을 제거하는 명렁어. -d 옵션은 디렉토리를 의미

• git cherry-pick {commit-id}
    • 특정 Commit 하나를 가져오기
• git rebase {branch|commit} [-i]
    • 여러 Commits 를 가져오기
    • 현재 브랜치의 base를 바꾸기
    • git rebase -i —> git 리베이시라고도 부름 : 히스토리를 마음대로 주무를 수 있음\



