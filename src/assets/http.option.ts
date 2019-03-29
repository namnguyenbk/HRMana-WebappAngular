import { HttpHeaders } from '@angular/common/http';



export const custom_http_option = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic bG9naW5zZXJ2aWNlOmRldmdsYW4tc2VjcmV0'
    })
};