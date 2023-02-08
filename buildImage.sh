IMAGE_NAME=czechprz/orders-frontend
sudo docker image rm -f $IMAGE_NAME
sudo docker image build --tag $IMAGE_NAME .
sudo docker image push $IMAGE_NAME
