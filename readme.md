# 더미 데이터 
~~~
https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/todos
~~~

# react 빌드
~~~
cd D:\code\javascript\react\start_react\spring\demo\react_src; npm run-script build
~~~

# 화면만 대충 확인
~~~
cd D:\code\javascript\react\start_react\spring\demo\react_src; npm start;
~~~

# 스프링 실행
~~~
cd D:\code\javascript\react\start_react\spring\demo; ./gradlew bootRun
~~~

# spring rest확인
```
curl -X POST http://localhost:8080/putTodo -H "Content-Type: application/json" -d "{ \"text\": \"johnny\" }"
```

# react 확인
http://localhost:8080/

# 한꺼번에
cd D:\code\javascript\react\start_react\spring\demo\react_src; npm run-script build; cd D:\code\javascript\react\start_react\spring\demo; ./gradlew bootRun

# 빌드만 
cd D:\code\javascript\react\start_react\spring\demo; ./gradlew build

# 부트만 실행
cd D:\code\javascript\react\start_react\spring\demo; ./gradlew bootRun