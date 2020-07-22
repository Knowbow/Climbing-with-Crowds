{\
    entities: { \
         users: { \
           1: { \
               id: 1, \
               name: "Tony Wu", \
               email: "Knowbow@gmail.com" \
               }\
           2: { \
               id: 2, \
               name: "Kevin Wu", \
               email: "Kaywu@gmail.com" \
               }\
          }\
         events: { \
           3: { \
               id: 3, \
               event_id: 1, \
               location_id: 1, \
               host_id: 1 \
               }\
           4: { \
               id: 4, \
               event_id: 2, \
               location_id: 2, \
               host_id: 2 \
               }\
          }\
         locations: { \
           5: { \
               id: 5, \
               name: "SportRock", \
               address: "2978 stella street", \
               city: "Sterling" \
       }\
           6: { \
               id: 6, \
               name: "SportRock", \
               address: "8023 climb street", \
               city: "Alexandria" \
               }\
          }\
    ui: { \
           pick location: onclick { \
           event: join/host { \
    }\
    errors: { \
           login: "Wrong username/password" { \
    }\
    session: { currentUserId: 1 }\
    }\
}