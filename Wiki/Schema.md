## User 
| Column name      | Data type | Details |
| :-----------: | :-----------: | :-----------: |
| id      | integer       | not null, primary key       |
| name   | string        | not null, indexed, unique       |
| email   | string        | not null, indexed, unique       |
| password_digest   | string        | not null     |
| session_token   | string        | not null, indexed, unique       |

## Event 
| Column name      | Data type | Details |
| :-----------: | :-----------: | :-----------: |
| id      | integer       | not null, primary key       |
| event_id   | integer        | not null, indexed, unique       |
| location_id   | integer        | not null, indexed       |
| host_id   | integer        | foreign key     |
| date   | datetime        | not null     |
| time   | datetime        | not null       |

## Location 
| Column name      | Data type | Details |
| :-----------: | :-----------: | :-----------: |
| id      | integer       | not null, primary key       |
| name   | string        | not null     |
| address   | string        | not null      |
| city   | string        | not null     |

## Event Participants (join) 
| Column name      | Data type | Details |
| :-----------: | :-----------: | :-----------: |
| id      | integer       | not null, primary key       |
| event_id   | integer        | not null, foreign key     |
| user_id   | integer        | not null, foreign key      |
