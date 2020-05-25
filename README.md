# Animal Crossing Item Server 


| Method | Endpoint | Description | Required |
| :----: | :---- | :---- | :---- |
| GET | /api/search | Get all items  | |
| POST | /api/search/:id | Add an item | id, item object |
| PUT | /api/users/:id | Edit item | id, item object |
| DELETE | /api/users/:id | Delete an item |  |



### Sample item object:
```javascript
{
    "name": "Common Butterfly",
    "price": 300,
    "category":"bug",
    "startMonth": "jan",
    "endMonth": "feb",
    "startTime": 800,
    "endTime": 1300,
    "conditions": "rainy"
}
```

## Adding an item


|Property| Required? | Type|
|:-----|:-----:|:-----|
|name| YES| string| 
|price| YES| integer|
|category| YES | string| 
|startMonth|NO| string|
|endMonth|NO|string|
|startTime| NO| integer|
|endTime| NO| integer|
|conditions|NO|string|




