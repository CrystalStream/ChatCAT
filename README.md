# ChatCAT App

### Setup

First clone the proyect:

```
git clone
```
Then under `app/config/` create a `development.json` file with the following.

```javascript
{
	"HOST": "",
	"DB_URI": "",
	"SESSION_SECRET": "",
	"FB": {
		"APP_ID" : "",
		"APP_SECRET": "",
		"CALLBACK_URL": "",
		"PROFILE_FIELDS": ["id", "displayName", "photos"]
	},
	"TW": {
		"API_KEY": "",
		"API_SECRET": "",
		"CALLBACK_URL": "",
		"PROFILE_FIELDS": ["id", "displayName", "photos"]
  },
  "REDIS": {
    "HOST": "127.0.0.1",
    "PORT": 6379,
    "PASSWORD": ""

  }
}
```
