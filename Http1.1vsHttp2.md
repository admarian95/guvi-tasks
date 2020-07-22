Http1.1 and Http2 main diff.

Benefits and main requirement of Http2

1. Server Push
This capability allows the server to send additional 
cacheable information to the client that isn’t requested but is 
anticipated in future requests. For example, if the client requests 
for the resource X and it is understood that the resource Y is 
referenced with the requested file, the server can choose to push Y 
along with X instead of waiting for an appropriate client request.

2  Low overhead in parsing data .

HTTP/2 compress a large number of redundant header frames using HPACK.
HPACK compresses the individual value of each header before it is transferred 
to the server, which then looks up the encoded information in a list 
of previously transferred header values to reconstruct the full header information.


3. Binary Protocol

The latest HTTP version has evolved significantly in terms of capabilities
 and attributes such as transforming from a text protocol to a binary protocol.
  HTTP1.x used to process text commands to complete request-response cycles. 
  HTTP/2 will use binary commands (in 1s and 0s) to execute the same tasks.

This simplifies implementation of commands that were confusingly 
intermixed due to commands containing text and optional spaces.

4. Request multiplexing

HTTP/2 can send multiple requests for data in parallel 
over a single TCP connection. This is the most advanced feature of the
HTTP/2 protocol because it allows you to download web files asynchronously 
from one server.

