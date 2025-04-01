### Task: 
https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view

### How to use the library

1. Install the library   
```bash
npm i @alinux/custom-components-lib
```

2. Use
```tsx
import React from "react";
import { Button } from "@alinux/custom-components-lib";

function App() {
    return <Button size={"medium"} variant={"contained"} label={"Click me"} type={"button"} />;
}

export default App;
```

### How to run the app: 
Clone the repo:
 ```bash
 git clone https://github.com/goremykina/custom-components-lib.git
 cd custom-components-lib
 ```

Install dependencies:
 ```
 npm install
 ```

Run storybook
 ```bash
 npm run storybook
 ```

### How to run tests:
```bash
npm run test
```

