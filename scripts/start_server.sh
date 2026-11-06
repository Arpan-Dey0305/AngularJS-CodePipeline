#!/bin/bash

systemctl enable apache2
systemctl restart apache2

echo "AngularJS application deployed successfully"