
/**
 * Map an array of type "BaseType" to "ConvertType"
 * @param array Array to map
 * @param callback Function to map an element of the array
 * @returns mapped array to the type ConvertType
 */
export default function arrayMapper<BaseType, ConvertType>(array: BaseType[], callback: (element: BaseType) => ConvertType) {
    return array.map((element) => {
        return callback(element)
    })
}