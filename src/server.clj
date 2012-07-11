(ns server
  (:use compojure.core)
  (:use ring.middleware.reload)
  (:use ring.middleware.file)
  (:use ring.middleware.file-info)
  (:use ring.adapter.jetty))

(defroutes handler)

(def app
  (-> #'handler
    (wrap-file "public")
    (wrap-file-info)
    (wrap-reload '[server])
))


(let [port (Integer/parseInt (get (System/getenv) "PORT" "8080"))]
  (run-jetty #'server/app {:port port}))