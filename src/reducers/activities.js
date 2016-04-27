import * as types from '../actions/types';

export function activities(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_ACTIVITIES:
    console.log(action.activities.data.length);
    return {
      ...state,...action.activities
    };
  default:
    return state;
  }
}

const initialState = {
  "data": []
}
const initial = {
  "data": [{
    "id": "199901",
    "type": "activities",
    "links": {
      "self": "https://release-us.agworld.co/user_api/v1/activities/199901"
    },
    "attributes": {
      "activity_category": null,
      "application_method": "Bait",
      "approved": true,
      "area": "145 acre",
      "author_company_id": 25013,
      "author_company_name": "Grow Co USA",
      "author_user_id": 4027,
      "author_user_name": "Grow Joe USA",
      "band": null,
      "chemical_cost": "$2,175.00",
      "comments": "Synced submitted",
      "company_id": 25013,
      "company_name": "Grow Co USA",
      "completed": false,
      "completed_at": null,
      "cost_per_area": "$15.00 /acre",
      "created_at": "2014-03-18T19:34:39.000-07:00",
      "created_on": "api",
      "droplet_size": "very_coarse",
      "due_at": "2015-05-14T12:00:00.000-07:00",
      "expiration_date": "2015-05-27T12:00:00.000-07:00",
      "fertilizer_cost": "$0.00",
      "humidity": null,
      "nozzle_type": null,
      "operator_company_id": 25013,
      "operator_company_name": "Grow Co USA",
      "operation_cost": "$0.00",
      "operator_users": [],
      "parent_id": -1,
      "reason_name": "Pest is known to occur in the area",
      "reason_text": "Pest is known to occur in the area",
      "season_phase": null,
      "seed_cost": "$0.00",
      "skip_row": null,
      "started_at": null,
      "temperature": null,
      "timing": null,
      "title": "Recommended Activity 199901",
      "total_cost": "$2,175.00",
      "total_volume": "2,900 gal",
      "activity_type": "RecommendedActivity",
      "updated_at": "2015-05-13T02:00:16.605-07:00",
      "water_rate": "20 gal/acre",
      "weather_conditions": null,
      "wind_direction": null,
      "wind_speed": null,
      "activity_inputs": [{
        "activity_input_order": 0,
        "cost_per_area": "$1.000000000000 /acre",
        "grazing_interval": null,
        "harvest_interval": null,
        "input_name": "42-S Thiram Fungicide",
        "input_type": "Product",
        "mix_method": "per_area",
        "plantback_interval": null,
        "product_categories": ["Fungicide", "Seed Protectant", "Seed Treatment"],
        "product_substance": "liquid",
        "rain_fast_interval": null,
        "rate": "1 gal/acre",
        "re_entry_interval": null,
        "stockfeed_inverval": null,
        "total_area": "145 acre",
        "total_cost": "$145.000000000000",
        "total_count": "0 each",
        "total_time": "0 h",
        "total_volume": "145 gal",
        "total_weight": "0 lbs",
        "unit_cost": "$1.000000000000 /gal"
      }, {
        "activity_input_order": 3,
        "cost_per_area": "$10.00 /acre",
        "grazing_interval": null,
        "harvest_interval": null,
        "input_name": "Bayer Mocap EC Nematicide Insecticide",
        "input_type": "Product",
        "mix_method": "per_area",
        "plantback_interval": null,
        "product_categories": ["Fungicide", "Nematicide", "Insecticide", "Larvicide"],
        "product_substance": "liquid",
        "rain_fast_interval": null,
        "rate": "2 gal/acre",
        "re_entry_interval": null,
        "stockfeed_inverval": null,
        "total_area": "145 acre",
        "total_cost": "$1,450.00",
        "total_count": "0 each",
        "total_time": "0 h",
        "total_volume": "290 gal",
        "total_weight": "0 lbs",
        "unit_cost": "$5.00 /gal"
      }, {
        "activity_input_order": 1,
        "cost_per_area": "$4.00 /acre",
        "grazing_interval": null,
        "harvest_interval": null,
        "input_name": "42-S Thiram Fungicide",
        "input_type": "Product",
        "mix_method": "per_area",
        "plantback_interval": null,
        "product_categories": ["Fungicide", "Seed Protectant", "Seed Treatment"],
        "product_substance": "liquid",
        "rain_fast_interval": null,
        "rate": "2 gal/acre",
        "re_entry_interval": null,
        "stockfeed_inverval": null,
        "total_area": "145 acre",
        "total_cost": "$580.00",
        "total_count": "0 each",
        "total_time": "0 h",
        "total_volume": "290 gal",
        "total_weight": "0 lbs",
        "unit_cost": "$2.00 /gal"
      }],
      "activity_paddocks": [{
        "area": "145 acre",
        "area_ratio": "1 %",
        "chemical_cost": "$2,175.000000000000",
        "crops": [{
          "crop_blend": null,
          "crop_grade": null,
          "crop_name": "Wheat",
          "crop_use": null,
          "variety_name": ""
        }],
        "crop_stage": null,
        "fertilizer_cost": "$0.00",
        "field_id": 75277,
        "operation_cost": "$0.00",
        "seed_cost": "$0.00",
        "season_id": 7739,
        "season_phase": null,
        "total_cost": "$2,175.000000000000"
      }],
      "activity_problems": []
    },
    "relationships": {
      "company": {
        "links": {
          "self": "https://release-us.agworld.co/user_api/v1/activities/199901/relationships/company",
          "related": "https://release-us.agworld.co/user_api/v1/activities/199901/company"
        }
      }
    }
  }],
  "links": {
    "first": "https://release-us.agworld.co/user_api/v1/companies/25013/activities?page%5Bnumber%5D=1\u0026page%5Bsize%5D=10",
    "next": "https://release-us.agworld.co/user_api/v1/companies/25013/activities?page%5Bnumber%5D=2\u0026page%5Bsize%5D=10",
    "last": "https://release-us.agworld.co/user_api/v1/companies/25013/activities?page%5Bnumber%5D=16\u0026page%5Bsize%5D=10"
  }
}
