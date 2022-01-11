package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/shamba/geostats/x/geostats/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) DataAll(c context.Context, req *types.QueryAllDataRequest) (*types.QueryAllDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var datas []types.Data
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	dataStore := prefix.NewStore(store, types.KeyPrefix(types.DataKey))

	pageRes, err := query.Paginate(dataStore, req.Pagination, func(key []byte, value []byte) error {
		var data types.Data
		if err := k.cdc.Unmarshal(value, &data); err != nil {
			return err
		}

		datas = append(datas, data)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllDataResponse{Data: datas, Pagination: pageRes}, nil
}

func (k Keeper) Data(c context.Context, req *types.QueryGetDataRequest) (*types.QueryGetDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(c)
	data, found := k.GetData(ctx, req.Id)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	return &types.QueryGetDataResponse{Data: data}, nil
}
