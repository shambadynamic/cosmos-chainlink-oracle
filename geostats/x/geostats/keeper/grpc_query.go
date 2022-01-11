package keeper

import (
	"github.com/shamba/geostats/x/geostats/types"
)

var _ types.QueryServer = Keeper{}
