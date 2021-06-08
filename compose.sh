
shopt -s nullglob

files=($(ls *-compose.yml | sed -s 's/^/-f /'))
docker-compose ${files[*]} up -d

