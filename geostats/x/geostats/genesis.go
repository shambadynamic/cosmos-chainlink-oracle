package geostats

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/shamba/geostats/x/geostats/keeper"
	"github.com/shamba/geostats/x/geostats/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the data
	for _, elem := range genState.DataList {
		k.SetData(ctx, elem)
	}

	// Set data count
	k.SetDataCount(ctx, genState.DataCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.DataList = k.GetAllData(ctx)
	genesis.DataCount = k.GetDataCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
