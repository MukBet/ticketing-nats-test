что бы работали эти нетс нужен запущенный скафолд, а значит гугл клауд.... а потом уже:
kubectl get pods
kubectl port-forward nats-depl-XXXXXXXXXXXXXXXXXXXXXXX 4222:4222
и только потом
npm run publish
npm run listen
