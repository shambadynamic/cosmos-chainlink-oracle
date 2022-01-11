package main

import (
	"encoding/base64"
	"fmt"
	"log"
	"strings"
)

//Convert retrieves the transaction hash and event type
func (txRes TxResult) convert(requesterAddr *string, agg_x *string, dataset_code *string, selected_band *string, image_scale *string, start_date *string, end_date *string, event *string) {
	fmt.Println(requesterAddr, agg_x, dataset_code, selected_band, image_scale, start_date, end_date, event)

	if result, ok := txRes["result"].(map[string]interface{}); ok {
		if data, ok := result["data"].(map[string]interface{}); ok {
			if tx, ok := data["value"].(map[string]interface{})["TxResult"].(map[string]interface{})["tx"]; ok {
				log.Printf("TX GOT: %s", tx.(string))

				val, err := base64.StdEncoding.DecodeString(tx.(string))

				if err != nil {
					log.Println("Cant decode hash")
				}

				resultStr := string(val)

				results := strings.SplitN(resultStr, "-", 3)

				if len(results) > 2 {

				results1 := strings.Split(results[2], "\"")

				results2 := strings.Split(results1[0], " ")

				results3 := strings.Split(results2[0], "agg")

				if len(results3) > 1 {
				fmt.Println("Requester: ", results3[0])
				fmt.Println("AggX: ", "agg"+results3[1])

				results4 := strings.Split(results1[1], ":")

				results5 := strings.Split(results4[0], "*")

				fmt.Println("DatasetCode: ", results5[0])

				results6 := strings.SplitN(results5[1], "2", 2)

				fmt.Println("SelectedBand: ", results6[0])

				fmt.Println("ImageScale: ", results6[1])

				results7 := strings.Split(results4[1], "X")

				results8 := strings.Split(results7[0], "B")

				fmt.Println("StartDate: ", strings.TrimPrefix(results8[0], "\n"))

				fmt.Println("EndDate: ", strings.TrimPrefix(results8[1], "\n"))

				*requesterAddr = results3[0]
				*agg_x = "agg" + results3[1]
				*dataset_code = results5[0]
				*selected_band = results6[0]
				*image_scale = results6[1]
				*start_date = strings.TrimPrefix(results8[0], "\n")
				*end_date = strings.TrimPrefix(results8[1], "\n")
				}
				}
			}

		}
		if events, ok := result["events"].(map[string]interface{}); ok {
			if msgAction, ok := events["message.action"]; ok {
				e := fmt.Sprint(msgAction.([]interface{})[0])
				*event = e
				log.Printf("EVENT TYPE GOT: %s", *event)
			}

		}
	}
}
