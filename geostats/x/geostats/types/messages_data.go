package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateData = "create_data"
	TypeMsgUpdateData = "update_data"
	TypeMsgDeleteData = "delete_data"
)

var _ sdk.Msg = &MsgCreateData{}

func NewMsgCreateData(creator string, requester string, aggX string, datasetCode string, selectedBand string, imageScale string, startDate string, endDate string) *MsgCreateData {
	return &MsgCreateData{
		Creator:      creator,
		Requester:    requester,
		AggX:         aggX,
		DatasetCode:  datasetCode,
		SelectedBand: selectedBand,
		ImageScale:   imageScale,
		StartDate:    startDate,
		EndDate:      endDate,
	}
}

func (msg *MsgCreateData) Route() string {
	return RouterKey
}

func (msg *MsgCreateData) Type() string {
	return TypeMsgCreateData
}

func (msg *MsgCreateData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateData{}

func NewMsgUpdateData(creator string, id uint64, requester string, aggX string, datasetCode string, selectedBand string, imageScale string, startDate string, endDate string) *MsgUpdateData {
	return &MsgUpdateData{
		Id:           id,
		Creator:      creator,
		Requester:    requester,
		AggX:         aggX,
		DatasetCode:  datasetCode,
		SelectedBand: selectedBand,
		ImageScale:   imageScale,
		StartDate:    startDate,
		EndDate:      endDate,
	}
}

func (msg *MsgUpdateData) Route() string {
	return RouterKey
}

func (msg *MsgUpdateData) Type() string {
	return TypeMsgUpdateData
}

func (msg *MsgUpdateData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteData{}

func NewMsgDeleteData(creator string, id uint64) *MsgDeleteData {
	return &MsgDeleteData{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteData) Route() string {
	return RouterKey
}

func (msg *MsgDeleteData) Type() string {
	return TypeMsgDeleteData
}

func (msg *MsgDeleteData) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteData) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteData) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
