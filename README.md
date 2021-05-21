# backend-alquingel
Para acessar as ações destinadas a usuários, deve-se usar as rotas:

`/client/singin` e `/client/singup`
```
{ 
	"nome": <string().max(255)>,
	"email": <string().email()>,
	"password": <string().min(12).max(32)>,
}
```
Para acessar as ações destinadas aos aparelhos, deve-se usar as rotas:

`/devices/new`,
`/devices/update-nivel` e
`/devices/list`
```
{
    wifi: <float()>,
    voltagem: <float()>,
    nivel: <int()>,
    local: <string().max(255)>
    name: <string().max(255)>
}
```
