FROM pierrezemb/gostatic

COPY dist/ /srv/http

EXPOSE 8080

CMD ["-fallback=/index.html", "-port=8080", "-enable-logging"]
