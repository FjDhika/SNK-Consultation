# Introduction

SNK Consultation is an API created for Benkend Engineer Test, this API use express with typeorm

## Search Endpoint

```http
GET /api/search?query=Armin&take=2&skip=0
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `query`   | `string` | **Optional**. Search Query                            |
| `take`    | `string` | **Optional**. number of data shown **Default is 3**   |
| `skip`    | `string` | **Optional**. number of data skipped **Default is 0** |

## Responses

```javascript
{
  "count"   : int,
  "status"  : int,
  "data"    : array
}
```

The `count` attribute contains total data found.

The `status` attribute contains status code.

The `data` attribute contains array of doctor object that match the search.

![alt text](https://github.com/FjDhika/SNK-Consultation/blob/master/screenshot/search_doctor.JPG?raw=true)

## Doctor Detail Endpoint

```http
GET /api/doctor?doctorId=c706e0ee-f613-4109-a9bc-2cdfa08cf71b
```

| Parameter  | Type     | Description                    |
| :--------- | :------- | :----------------------------- |
| `doctorId` | `string` | **Required**. Id of the doctor |

## Responses

```javascript
{
  "status"  : int,
  "data"    : object
}
```

The `status` attribute contains status code.

The `data` attribute contains doctor object with that `doctorId`.

![alt text](https://github.com/FjDhika/SNK-Consultation/blob/master/screenshot/detail_doctor.JPG?raw=true)

## Appointment Endpoint

```http
POST /api/appointment
```

this endpoint only accept `application/json` content type.

| Post fields | Type     | Description                                   |
| :---------- | :------- | :-------------------------------------------- |
| `doctorId`  | `string` | **Required**. Id of the doctor                |
| `start`     | `date`   | **Required**. Time when the appointment start |

## Responses

```javascript
{
  "status"  : int,
  "data"    : boolean
}
```

The `status` attribute contains status code.

The `data` attribute that show wether the appointment is successfully created `doctorId`.

![alt text](https://github.com/FjDhika/SNK-Consultation/blob/master/screenshot/appointment.JPG?raw=true)
