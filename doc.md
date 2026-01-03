что бы работали эти нетс нужен запущенный скафолд, а значит гугл клауд.... а потом уже:
kubectl get pods
kubectl port-forward nats-depl-XXXXXXXXXXXXXXXXXXXXXXX 4222:4222
kubectl port-forward nats-depl-XXXXXXXXXXXXXXXXXXXXXXX 8222:8222
и только потом
npm run publish
npm run listen
localhost:8222/streaming
