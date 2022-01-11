package main

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
)

const (
	externalInitiatorAccessKeyHeader = "X-Chainlink-EA-AccessKey"
	externalInitiatorSecretHeader    = "X-Chainlink-EA-Secret"
)

// Node encapsulates all the configuration
// necessary to interact with a Chainlink node.
type Node struct {
	AccessKey    string
	AccessSecret string
	Endpoint     url.URL
}

func (cl Node) Trigger(jobId string, payload []byte) error {

	fmt.Printf("JOB ID: %s \n", jobId)
	u := cl.Endpoint
	fmt.Printf("REQ BODY: %s \n", bytes.NewReader(payload))
	u.Path = fmt.Sprintf("/v2/jobs/%s/runs", jobId)
	fmt.Printf("URL: %s \n", u.String())
	request, err := http.NewRequest(http.MethodPost, u.String(), bytes.NewReader(payload))
	if err != nil {
		return err
	}

	request.Header.Set("Content-Type", "application/json")
	request.Header.Add(externalInitiatorAccessKeyHeader, cl.AccessKey)
	request.Header.Add(externalInitiatorSecretHeader, cl.AccessSecret)

	res, err := http.DefaultClient.Do(request)
	if err != nil {
		return err
	}
	// fmt.Println("REQ: %s", request.Body)
	// fmt.Println("RES: %s", res)
	data, _ := ioutil.ReadAll(res.Body)
	res.Body.Close()
	fmt.Printf("BODY: %s \n", data)
	return nil
}
