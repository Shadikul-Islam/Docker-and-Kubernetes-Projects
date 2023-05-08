### Online IDE Which Will Complile C, Java, Python Code in Online Using Docker-Compose, Docker-Swarm and Python Flask

#### Necessary Commands:

```docker-compose up -d --build```

```docker-compose down```

```docker login```

```docker commit frontend frontend```

```docker tag frontend shadikul/frontend```

```docker push shadikul/frontend```

```docker commit c-compiler c-compiler```

```docker tag c-compiler shadikul/c-compiler```

```docker push shadikul/c-compiler```

```docker commit java-compiler java-compiler```

```docker tag java-compiler shadikul/java-compiler```

```docker push shadikul/java-compiler```

```docker commit python-compiler python-compiler```

```docker tag python-compiler shadikul/python-compiler```

```docker push shadikul/python-compiler```

```docker stack deploy -c deploy.yml online-ide```

```docker stack rm online-ide```
