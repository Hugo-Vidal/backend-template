# FROM ghcr.io/smu-chile/node-smu:18-alpine3.16 AS develop

# RUN apk --update add nodejs --no-cache

# WORKDIR /usr/src/app/
# COPY . .
# ENV PORT=3000
# RUN npm i
# ARG NODE_ENV
# ARG CONSUL_HTTP_TOKEN
# ENV APP_ENV=${NODE_ENV}
# ARG CONSUL_HTTP_ADDR=${CONSUL_HTTP_ADDR}
# ARG CONSUL_HTTP_TOKEN=${CONSUL_HTTP_TOKEN}


# ## Add Certificate Validation and consul
# RUN apk add --no-cache ca-certificates && update-ca-certificates
# ARG CONSUL_TEMPLATE_VERSION=0.25.1
# RUN wget -q "https://releases.hashicorp.com/consul-template/${CONSUL_TEMPLATE_VERSION}/consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz" && tar zxfv consul-template_${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz && docker/entrypoint.sh && rm -f consul-template${CONSUL_TEMPLATE_VERSION}_linux_amd64.tgz && rm -f consul-template && npm run build

# COPY . .

# EXPOSE 3000
# CMD ["npm", "run", "prod"]