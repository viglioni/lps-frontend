#!/bin/bash

(rsync -avzhe "ssh -p 65002" ./out/* u336768656@185.201.11.181:/home/u336768656/public_html/lps) && echo "deployed" || echo "something went wrong"
