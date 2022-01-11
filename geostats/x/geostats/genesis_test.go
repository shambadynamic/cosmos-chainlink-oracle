package geostats_test

import (
	"testing"

	keepertest "github.com/shamba/geostats/testutil/keeper"
	"github.com/shamba/geostats/testutil/nullify"
	"github.com/shamba/geostats/x/geostats"
	"github.com/shamba/geostats/x/geostats/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		DataList: []types.Data{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		DataCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.GeostatsKeeper(t)
	geostats.InitGenesis(ctx, *k, genesisState)
	got := geostats.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.DataList, got.DataList)
	require.Equal(t, genesisState.DataCount, got.DataCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
