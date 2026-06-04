docker build -t radioobligato-nginx .
docker run -d -p 8080:80 radioobligato-nginx