# Base Image
FROM ubunto
# Do Image config
RUN /bin/bash -c 'echo Hello'
EVN myCustomEnvVar="This is a sample." \
  otherEnvVar="This is another example."
