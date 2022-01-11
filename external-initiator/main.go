package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"os"
	"strconv"
	"strings"
	"unicode"

	"github.com/joho/godotenv"
)

//This will hold the transaction result
type TxResult map[string]interface{}

func main() {

	//Construct the ws url
	u := url.URL{
		Scheme: "ws",
		Host:   "165.232.134.108:26657",
		Path:   "/websocket",
	}

	WS := WebSocket{
		Endpoint: u.String(),
	}

	c := WS.Connect()

	//Subscription message
	message := `{
		"jsonrpc": "2.0",
		"method": "subscribe",
		"id": 0,
		"params": {
			"query":"tm.event = 'Tx'"
		}
	}`

	c.Subscribe(message)
}

// type data struct {
// 	aggX         string
// 	datasetCode  string
// 	selectedBand string
// 	imageScale   string
// 	startDate    string
// 	endDate      string
// }

type Payload struct {
	Endpoint  string `json:"endpoint"`
	Requester string `json:"requester"`
	Data      string `json:"data"`
}

//Start job starts triggers the job on the oracle node
func startJob(requester string, agg_x string, dataset_code string, selected_band string, image_scale string, start_date string, end_date string) {
	fmt.Println("hereee 2: ")
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatal("Error loading env.")
	}

	u := url.URL{
		Scheme: "http",
		Host:   os.Getenv("EI_CHAINLINKURL"),
		Path:   fmt.Sprintf("v2/specs/%s/runs", os.Getenv("JOB_ID")),
	}

	cl := Node{
		AccessKey:    os.Getenv("EI_IC_ACCESSKEY"),
		AccessSecret: os.Getenv("EI_IC_SECRET"),
		Endpoint:     u,
	}

	requester = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, requester)

	agg_x = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, agg_x)

	dataset_code = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, dataset_code)

	selected_band = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, selected_band)

	image_scale = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, image_scale)

	start_date = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, start_date)

	end_date = strings.Map(func(r rune) rune {
		if unicode.IsPrint(r) {
			return r
		}
		return -1
	}, end_date)

	image_scale_int, _ := strconv.Atoi(image_scale)

	fmt.Println(image_scale_int)

	p := Payload{
		Endpoint:  "statistics",
		Requester: fmt.Sprint(strings.TrimSpace(requester)),
		Data:      fmt.Sprintf("{\"agg_x\": \"%s\", \"dataset_code\":\"%s\", \"selected_band\":\"%s\", \"image_scale\":%d, \"start_date\":\"%s\", \"end_date\":\"%s\", \"geometry\":{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"properties\":{},\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[19.51171875,4.214943141390651],[18.28125,-4.740675384778361],[26.894531249999996,-4.565473550710278],[27.24609375,1.2303741774326145],[19.51171875,4.214943141390651]]]}}]}}", agg_x, dataset_code, selected_band, image_scale_int, start_date, end_date),
	}

	// fmt.Println("AGG_X: ", strings.TrimSpace(agg_x))
	// fmt.Println("DATASET_CODE: ", strings.TrimSpace(dataset_code))
	// fmt.Println("SELECTED_BAND: ", strings.TrimSpace(selected_band))
	// fmt.Println("IMAGE_SCALE: ", strings.TrimSpace(image_scale))
	// fmt.Println("START_DATE: ", strings.TrimSpace(start_date))
	// fmt.Println("END_DATE: ", strings.TrimSpace(end_date))

	fmt.Println("PAYLOAD: ", p)
	res, _ := json.Marshal(p)

	error := cl.Trigger(os.Getenv("JOB_ID"), res)

	if error != nil {
		log.Fatal("Error running job: ", error)
	}
	fmt.Println("Job successfully run!")
}
