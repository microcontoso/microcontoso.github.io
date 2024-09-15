---
layout: default
title: Network
nav_order: 3
has_children: true
permalink: /docs/network
---

# Network

Network is the basis of the whole IT infrastructure. 

IP Addresses reserved for use on private networks:

- **Class A:** 10.0.0.0 to 10.255.255.255

- **Class B:** 172.16.0.0 to 172.31.255.255

- **Class C:** 192.168.0.0 to 192.168.255.255

## Choosing private IPv4 address

- Reserve enough IP addresses for all devices (Desktop, Laptop, Mobile, etc), Class A may be good choose. 

- Pay attention to potential IP confiction in your environment (Docker may use IP address of Class B, etc).

## Example of a company with three Offices

```js
Beijing Office 10.10.0.0/255.255.0.0
Shanghai Office 10.20.0.0/255.255.0.0
Shenzhen Office 10.30.0.0/255.255.0.0
```

## Example of Beijing office

```js
Windows Server 10.10.10.0/255.255.255.0 (Available IP address 10.10.10.1 - 10.10.10.254)
Linux Server 10.10.20.0/255.255.254.0 (Available IP address 10.10.20.1 - 10.10.21.254)
...
```
