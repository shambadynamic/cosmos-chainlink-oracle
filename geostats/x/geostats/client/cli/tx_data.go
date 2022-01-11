package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/shamba/geostats/x/geostats/types"
	"github.com/spf13/cobra"
)

func CmdCreateData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-data [requester] [agg-x] [dataset-code] [selected-band] [image-scale] [start-date] [end-date]",
		Short: "Create a new data",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argRequester := args[0]
			argAggX := args[1]
			argDatasetCode := args[2]
			argSelectedBand := args[3]
			argImageScale := args[4]
			argStartDate := args[5]
			argEndDate := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateData(clientCtx.GetFromAddress().String(), argRequester, argAggX, argDatasetCode, argSelectedBand, argImageScale, argStartDate, argEndDate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-data [id] [requester] [agg-x] [dataset-code] [selected-band] [image-scale] [start-date] [end-date]",
		Short: "Update a data",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argRequester := args[1]

			argAggX := args[2]

			argDatasetCode := args[3]

			argSelectedBand := args[4]

			argImageScale := args[5]

			argStartDate := args[6]

			argEndDate := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateData(clientCtx.GetFromAddress().String(), id, argRequester, argAggX, argDatasetCode, argSelectedBand, argImageScale, argStartDate, argEndDate)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-data [id]",
		Short: "Delete a data by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteData(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
