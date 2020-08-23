FROM node:13-alpine

# set working directory
RUN mkdir /usr/app

# copy all files from current directory to docker
COPY . /usr/src/app

WORKDIR /usr/src/app

ENV PATH usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

# start app
CMD ["npm", "start"]