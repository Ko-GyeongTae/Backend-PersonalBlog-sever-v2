FROM node:14-alpine

# update packages
RUN apk update

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY . . 

# check files list
RUN ls -a

RUN apk add nodejs yarn
RUN yarn

EXPOSE 5010

RUN yarn build
CMD ["yarn", "start"]