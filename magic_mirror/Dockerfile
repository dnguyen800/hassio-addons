# (default add-on tutorial code)
ARG BUILD_FROM
FROM $BUILD_FROM

# Add env (default add-on tutorial code)
ENV LANG C.UTF-8

# Install requirements for add-on
RUN apk add --no-cache git nodejs nodejs-npm curl wget unzip \
    && npm set unsafe-perm true \
    && npm i npm@latest -g 

# Location where the git install is located in the docker container.
WORKDIR /opt/magic_mirror

RUN git clone --depth 1 -b master https://github.com/MichMich/MagicMirror.git . \
  && npm install --unsafe-perm

# Copy data for add-on (default add-on tutorial code)
COPY run.sh /
COPY config.js /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]



