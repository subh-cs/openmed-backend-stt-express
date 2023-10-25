# openmed-backend-stt-express
A brief description of what this project does and who it's for


## Installation

Clone this repo
```
https://github.com/subh-cs/openmed-backend-stt-express.git
```
1. Go inside the directry
```
cd openmed-backend-stt-express
```
2. Install dependency
```
pnpm i
```
3. Make sure you have key.json in the root directry, (GCP specific)

`key.json`, 
```
{
    "type": "service_account",
    "project_id": "XXXXXXXXXXXXX",
    "private_key_id": "XXXXXXXXXXXXXX",
    "private_key": "-----BEGIN PRIVATE KEY-----XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXEND PRIVATE KEY-----\n",
    "client_email": "XXXXXXXXXXX.gserviceaccount.com",
    "client_id": "XXXXXXXXXXXXXXXXXXX",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "XXXXXXXXXXXXXXXX",
    "universe_domain": "googleapis.com"
  }
  ```
4. Start the server
```
pnpm run dev
```

    
