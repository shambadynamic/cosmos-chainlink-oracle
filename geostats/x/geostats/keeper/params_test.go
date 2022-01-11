package keeper_test

import (
	"testing"

	testkeeper "github.com/shamba/geostats/testutil/keeper"
	"github.com/shamba/geostats/x/geostats/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.GeostatsKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
