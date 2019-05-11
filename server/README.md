# Install

In `$PROJECT_ROOT/server` do:

```
pip install pipenv
pipenv install --dev
pipenv shell
```

# Start Server


## If model was changed

```
python manage.py makemigrations cycleit
python manage.py migrate
```


local development server

```
cd server
python manage.py runserver
```

public server

```
cd server
python manage.py runserver 0.0.0.0:8000
```
