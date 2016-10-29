## 특강 : Git basic   - 허진한 강사님 hjh5488@gmail.com

#### Git이 뭔데? 왜 써야하는데?    
: 수정할때마다 수정기록이 남았으면 좋겠고 수정하기전과 비교했을때 뭐가 바뀌었는지 알수 있으면 참 좋을텐데?<br>
: Version Control System(VCS)<br>
: Distributed Version Control System(DVCS) : 분산형 버젼관리 시스템
 
#### Git

###### working directory
: PC의 작업공간.

###### staging area
: working directory에서 local repo로 commit하기 전에 임시적으로 머무는 위치

###### local repository
: 자신의 PC에서 버전 콘트롤을 할 수 있는 곳. 

###### remote repository
: git을 호스팅하는 공간.

###### fetch
: remote repository에 있는 파일들을 local repository로 받아 온다.<br>
하지만 현재 local repository에 있는 파일들과 합쳐지지 않은 상태이다.

###### merge
: fetch로 받아온 파일들을 local repository에 있는 파일과 합치는 것이다.

###### pull
: pull은 remote repository에 있는 파일들을 fetch -> merge를 한번에 하는 것이다


#### Git != GitHub
* GitHub는 **git hosting서버중에 하나**다.
* github, GitLab, Bitbucket ,,
* git을 여러 hosting업체에 버전관리 가능. > 분산형 버전관리 시스템.

 
#### 실습
CLI 기초 명령어
```
ls -al 
: 폴더내 리스트를 보여주는데 숨김파일과 파일권한(a), 소유주(l)도 보여줘

mkdir 
: [directory] make directory의 약자 디렉토리를 만들때 사용

cd 
: [directory] change directory의 약자 해당 폴더로 이동할때 사용 

mkdir test && cd '$_' 
: 명령어 동시에 사용하기.

rm -rf
: 폴더 제거. 

touch [file_name] f
: file_name으로 파일 생성.

vi [file_name] 
: vi라는 에디터로 file을 열때 사용 

wq 
: vi에서 write하고 quit할때 사용 

q! 
: vi에서 저장하지 않고 나갈때 사용 
```

Git 명령어
* origin => 나의 레포 (통상적)
* upstream => 내가 포크떠온 원본 레포 (통상적)
* stage에 commit 되지 않은 수정이 있으면 pull 되지 않음.

###### `git init`
: (.git) 폴더가 생김

###### `git-ignore 옵션`
: 로컬에만 가지고 있어야하는, 제외할 파일을 정의

###### `git clone (git 주소)`
: 현재폴더에 git 저장소를 동기화한다.

###### `git log`
: 

###### `git status`
: stage 상태를 보여줌.

###### `git add file_name`
: stage 에 file_name을 올림

###### `git rm --cached file_name`
: stage에서 file_name을 내림

###### `git push`
: remote repo에 commit 내용을 올림

###### `git config --list`
: 설정 내용을 표시 

###### `git remote -v`
: git에 설정된 원격주소를 표시

###### `git push origin master`
: 원격 push 주소로 내 레포중에서 master 브랜치의 내용을 올린다.

###### `git pull origin master`
: push origin 에서 master 브랜치의 내용을 내려 받음.
  
###### `git pull --rebase origin master`
: 지우고 다시 받아.

###### `git rebase --continue`
:

###### `git checkout -b signup`
: signup 브랜치를 생성.

###### `git remote add upstream http://github.com/LeoHeo/pr-test.git`
: 내 레포에 'upstream' 이름으로 url 저장소를 fork 한다.

###### `git config --global core.autocrlf input`
: window에서 add 할때 개행문자 오류가 나면 해당 명령어 입력.