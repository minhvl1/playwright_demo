## Overview
- Playwright + typescript + POM + allure report + github actions
![image](https://user-images.githubusercontent.com/67543695/203464063-e6179e2e-ba3a-482a-b704-05c855d4ff51.png)

- Allway record and screenshot on falure
![image](https://user-images.githubusercontent.com/67543695/203464302-f2d2c60a-c59b-4e8f-bf9c-91b841000e95.png)

![image](https://user-images.githubusercontent.com/67543695/203464428-ef75a9e7-e763-4ee1-8853-1fa48b2fd276.png)

![image](https://user-images.githubusercontent.com/67543695/203464174-8c789747-f1a3-4f16-a70e-d680eb9d7ebf.png)


## Run script

`npx playwright test`

- Run with headed mode

`npx playwright test --headed`

- Run with debug mode

`npx playwright test --debug`

- Run with code mode

`npx playwright codegen "url" `

![image](https://user-images.githubusercontent.com/67543695/203465176-6b34e18f-4178-46e5-ad96-3501764d3611.png)

![image](https://user-images.githubusercontent.com/67543695/203465193-f81c6aed-5729-43e4-a8b8-c78b206c0bc2.png)

![image](https://user-images.githubusercontent.com/67543695/203465208-babd6941-1986-4fae-afa4-d86cf4c00ef8.png)

![image](https://user-images.githubusercontent.com/67543695/203465312-dc14b1e0-e935-4483-8c06-dea7fef85b79.png)

![image](https://user-images.githubusercontent.com/67543695/203465340-8c5abf44-5422-474f-a5c3-e9db94882b6b.png)


![image](https://user-images.githubusercontent.com/67543695/203465008-bedfb82d-efe5-43d9-bb9c-2777ddaf4ddb.png)


- run with allure report: 

`npx playwright test --reporter=line,allure-playwright`

`npm run pw-allure`

![image](https://user-images.githubusercontent.com/67543695/203464786-98566839-1a1f-4bc0-a64f-71f235d4ce38.png)


open allure rp: `npx allure serve "folder json allure"`
