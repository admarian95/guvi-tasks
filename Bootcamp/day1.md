Q1.  Can you explain about DOM and the browser components?

DOM :-
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. 

Browser Components :-

1. The user interface:

This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. The browser engine: marshals actions between the UI and the rendering engine.

3. The rendering engine :

responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. Networking:

For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. UI backend:

Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

6. JavaScript interpreter.

Used to parse and execute JavaScript code.

7. Data storage.

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

image src : https://i.imgur.com/VcpjfPL.png

Q2. Why we need an IP address and mac address?

 MAC Addresses handle the physical connection from computer to computer while IP Addresses handle the logical routeable connection from both computer to computer AND network to network.

Q3. Are JS and Java are the same?
 No

Q4. What are the various Layout and JS engines?

Google Chrome and Opera v.15+: Blink
Internet Explorer: Trident
Mozilla Firefox: Gecko
Chrome for iOS and Safari: WebKit

Q5. What's a programming paradigm?

Programming paradigms are a way to classify programming languages based on their features. Languages can be classified into multiple paradigms.
Some of the paradigms include :
imperative,
functional,
object-oriented,
logic and so on.

Q6. Features of JS?

Object-Centered Script Language
Client edge Technology
Validation of User’s Input
Else and If Statement
Interpreter Centered
Ability to perform In Built Function
Case Sensitive format
Light Weight and delicate
Statements Looping
Handling Events

Q7. What happens when you hit a website? Explain the flow in detail.

1. After hitting the URL, the browser cache is checked. As browser maintains its DNS records for some amount of time for the websites you have visited earlier. Hence, firstly, DNS query runs here to find the IP address associated with the domain name.

2. The second place where DNS query runs in OS cache followed by router cache.

3. If in the above steps, a DNS query does not get resolved, then it takes the help of resolver server. Resolver server is nothing but your ISP (Internet service provider). The query is sent to ISP where DNS query runs in ISP cache.

4. If in 3rd steps as well, no results found, then request sends to top or root server of the DNS hierarchy. There it never happens that it says no results found, but actually it tells, from where this information you can get. If you are searching IP address of the top level domain (.com,.net,.Gov,. org). It tells the resolver server to search TLD server (Top level domain).

5. TCP connection initiates
    5.1 A client computer sends a SYN message means, whether second computer is open    for new connection or not.
    5.2 Then another computer, if open for new connection, it sends acknowledge message with SYN message as well.
    5.3 After this, first computer receives its message and acknowledge by sending an ACK message.

6. Communication Starts (Request Response Process)
Finally, the connection is built between client and server. Now, they both can communicate with each other and share information. After successful connection, browser (client) sends a request to a server that I want this content. The server knows everything of what response it should send for every request. Hence, the server responds back. This response contains every information that you requested like web page, status-code, cache-control, etc. Now, the browser renders the content that has been requested.

Q8. What are the HTTP error codes?

S.N.	Code and Description
3	    3xx: Redirection It means further action must be taken in order to complete             the request.
4	    4xx: Client Error It means the request contains incorrect syntax or cannot be           fulfilled.
5	    5xx: Server Error It means the server failed to fulfill an apparently valid             request.

Q9. What is the diff between http1.1 vs http2?
Included in the file Http1.1vsHttp2.md

Q10. What's an HTTP header?

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value

Headers can be grouped according to their contexts:

General headers :
apply to both requests and responses, but with no relation to the data transmitted in the body.
Request headers :
contain more information about the resource to be fetched, or about the client requesting the resource.
Response headers :
hold additional information about the response, like its location or about the server providing it.
Entity headers :
contain information about the body of the resource, like its content length or MIME type.

Q11. What's the default browser method?
GET