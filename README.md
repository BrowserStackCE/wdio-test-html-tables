# wdio-test-html-tables
Sample WDIO approach to read data tables with minimal network calls

## Install dependencies

npm install

## Run test

npm run wdio

## Sample Output on BrowserStack Dashboard

[Public link](https://automate.browserstack.com/builds/ed4b4fa3df00e38124c44caacf68ebf5640509e5/sessions/8175b619eadd9f865e7e69d345bb0518a5641d29?auth_token=59577706337eeee039568c83c1280b77c14ede884ff2fe0d0dd977f44b648883)


## Sample Execution Machine Console Logs

```
➜  wdio-test-html-tables npm run wdio

> wdio
> wdio run ./wdio.conf.js


Execution of 1 workers started at 2023-01-02T16:32:57.556Z

[0-0] RUNNING in chrome - file:///test/specs/test.js
[0-0]
[0-0] Company	Contact	Country
[0-0] Alfreds Futterkiste	Maria Anders	Germany
[0-0] Centro comercial Moctezuma	Francisco Chang	Mexico
[0-0] Ernst Handel	Roland Mendel	Austria
[0-0] Island Trading	Helen Bennett	UK
[0-0] Laughing Bacchus Winecellars	Yoshi Tannamuri	Canada
[0-0] Magazzini Alimentari Riuniti	Giovanni Rovelli	Italy
[0-0] PASSED in chrome - file:///test/specs/test.js

 "spec" Reporter:
------------------------------------------------------------------
[chrome 108.0.5359.72 windows #0-0] Running: chrome (v108.0.5359.72) on windows
[chrome 108.0.5359.72 windows #0-0] Session ID: 8175b619eadd9f865e7e69d345bb0518a5641d29
[chrome 108.0.5359.72 windows #0-0]
[chrome 108.0.5359.72 windows #0-0] » /test/specs/test.js
[chrome 108.0.5359.72 windows #0-0] Testing with W3Schools HTML Tables
[chrome 108.0.5359.72 windows #0-0]    ✓ Read data from table
[chrome 108.0.5359.72 windows #0-0]
[chrome 108.0.5359.72 windows #0-0] 1 passing (12.5s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:16

```

### Note

DOM parsing is achieved in the sample script using an popular NodeJS library, with MIT license, for ease of use: https://www.npmjs.com/package/node-html-parser
However, the DOM parsing approach may also be done locally using any custom logic.