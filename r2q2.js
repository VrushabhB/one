/*
Question: 

    Design and implement a module for caching objects.

    1. It should be possible to set a default TTL expiry as well as per object.
    2. It should be possible to set a maximum number of cache entries; additional entries to the cache should invalidate previous entries.
    3. Try to optimize for both speed and memory use.
*/

class Cache {
  constructor(defaultTTL = 60, maxEntries = 100) {
    this.cache = new Map();
    this.defaultTTL = defaultTTL * 1000; // Convert seconds to milliseconds
    this.maxEntries = maxEntries;
  }

  set(key, value, ttl = this.defaultTTL) {
    const expiry = Date.now() + ttl;
    console.log("expiry: ", expiry);
    this.cache.set(key, { value, expiry });
    if (this.cache.size > this.maxEntries) {
      this.removeOldestEntry();
    }
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    if (item.expiry < Date.now()) {
      this.cache.delete(key);
      return null;
    }
    return item.value;
  }

  removeOldestEntry() {
    let oldestKey = null;
    let oldestExpiry = Infinity;
    this.cache.forEach((value, key) => {
      if (value.expiry < oldestExpiry) {
        oldestKey = key;
        oldestExpiry = value.expiry;
      }
    });
    this.cache.delete(oldestKey);
  }

  has(key) {
    const item = this.cache.get(key);
    if (!item) return false;
    if (item.expiry < Date.now()) {
      this.cache.delete(key);
      return false;
    }
    return true;
  }
}

// Example usage:
const cache = new Cache(60, 3); // Default TTL: 60 seconds, Max Entries: 3
cache.set("key1", "value1");
cache.set("key2", "value2", 30); // Custom TTL: 30 seconds
cache.set("key3", "value3");

console.log(cache.get("key1")); // Output: value1
console.log(cache.get("key2")); // Output: value2
console.log(cache.get("key3")); // Output: value3

setTimeout(() => {
  console.log(cache.get("key2")); // Output: null (expired)
}, 10000);

console.log(cache.has("key1")); // Output: true
console.log(cache.has("key2")); // Output: false (expired)
